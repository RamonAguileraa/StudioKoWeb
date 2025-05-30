import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    // Validar variables de entorno
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error('Las variables de entorno para el correo no están configuradas')
    }

    const { name, email, company, interest, service, message } = await request.json()

    // Validar datos requeridos
    if (!name || !email || !message) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Faltan campos requeridos',
          details: 'Nombre, email y mensaje son obligatorios'
        },
        { status: 400 }
      )
    }

    // Crear un transporter de nodemailer usando SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verificar la conexión
    try {
      await transporter.verify()
    } catch (error) {
      console.error('Error al verificar la conexión SMTP:', error)
      throw new Error('Error al conectar con el servidor de correo')
    }

    // Configurar el correo
    const mailOptions = {
      from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`,
      to: 'contact.studioko.dev@gmail.com',
      replyTo: email,
      subject: `Nuevo contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Empresa:</strong> ${company || 'No especificada'}</p>
            <p><strong>Interés:</strong> ${interest || 'No especificado'}</p>
            <p><strong>Servicio:</strong> ${service || 'No especificado'}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <div style="margin-top: 20px; font-size: 12px; color: #666;">
            <p>Este correo fue enviado desde el formulario de contacto de StudioKó.</p>
          </div>
        </div>
      `,
    }

    // Enviar el correo
    try {
      await transporter.sendMail(mailOptions)
    } catch (error) {
      console.error('Error al enviar el correo:', error)
      throw new Error('Error al enviar el correo electrónico')
    }

    return NextResponse.json({ 
      success: true,
      message: 'Correo enviado exitosamente' 
    }, { status: 200 })
  } catch (error) {
    console.error('Error en el proceso de envío:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Error al enviar el correo',
        details: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    )
  }
} 