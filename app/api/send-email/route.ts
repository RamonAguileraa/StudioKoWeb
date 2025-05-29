import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, company, interest, service, message } = await request.json()

    // Crear un transporter de nodemailer usando SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true para 465, false para otros puertos
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verificar la conexión
    await transporter.verify()

    // Configurar el correo
    const mailOptions = {
      from: `"Formulario de Contacto" <${process.env.EMAIL_USER}>`,
      to: 'contact.studioko.dev@gmail.com',
      replyTo: email, // Permite responder directamente al remitente
      subject: `Nuevo contacto de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">Nuevo mensaje de contacto</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Empresa:</strong> ${company}</p>
            <p><strong>Interés:</strong> ${interest}</p>
            <p><strong>Servicio:</strong> ${service}</p>
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
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ 
      success: true,
      message: 'Correo enviado exitosamente' 
    }, { status: 200 })
  } catch (error) {
    console.error('Error al enviar el correo:', error)
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