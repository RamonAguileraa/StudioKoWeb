"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useLanguage } from "@/context/language-context"

interface LegalDialogProps {
  type: "privacy" | "terms"
  children: React.ReactNode
}

export function LegalDialog({ type, children }: LegalDialogProps) {
  const { language } = useLanguage()

  const content = {
    en: {
      privacy: {
        title: "Privacy Policy",
        content: `Last updated: ${new Date().toLocaleDateString()}

1. Information We Collect
We collect information that you provide directly to us, including when you create an account, use our services, or communicate with us.

2. How We Use Your Information
We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect our company and users.

3. Information Sharing
We do not share your personal information with third parties except as described in this privacy policy.

4. Your Rights
You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.

5. Changes to This Policy
We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.`,
      },
      terms: {
        title: "Terms of Service",
        content: `Last updated: ${new Date().toLocaleDateString()}

1. Acceptance of Terms
By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.

2. Use License
Permission is granted to temporarily download one copy of the materials (information or software) on StudioKó's website for personal, non-commercial transitory viewing only.

3. Disclaimer
The materials on StudioKó's website are provided on an 'as is' basis. StudioKó makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.

4. Limitations
In no event shall StudioKó or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on StudioKó's website.

5. Revisions and Errata
The materials appearing on StudioKó's website could include technical, typographical, or photographic errors. StudioKó does not warrant that any of the materials on its website are accurate, complete or current.`,
      },
    },
    es: {
      privacy: {
        title: "Política de Privacidad",
        content: `Última actualización: ${new Date().toLocaleDateString()}

1. Información que Recopilamos
Recopilamos información que nos proporciona directamente, incluyendo cuando crea una cuenta, utiliza nuestros servicios o se comunica con nosotros.

2. Cómo Usamos su Información
Utilizamos la información que recopilamos para proporcionar, mantener y mejorar nuestros servicios, desarrollar nuevos y proteger nuestra empresa y usuarios.

3. Compartir Información
No compartimos su información personal con terceros excepto como se describe en esta política de privacidad.

4. Sus Derechos
Usted tiene derecho a acceder, corregir o eliminar su información personal. Contáctenos para ejercer estos derechos.

5. Cambios en esta Política
Podemos actualizar esta política de privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva política en esta página.`,
      },
      terms: {
        title: "Términos de Servicio",
        content: `Última actualización: ${new Date().toLocaleDateString()}

1. Aceptación de Términos
Al acceder y utilizar este sitio web, usted acepta y acuerda estar sujeto a los términos y disposiciones de este acuerdo.

2. Licencia de Uso
Se otorga permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de StudioKó solo para visualización personal, no comercial y transitoria.

3. Descargo de Responsabilidad
Los materiales en el sitio web de StudioKó se proporcionan 'tal cual'. StudioKó no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluyendo, sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular, o no infracción de propiedad intelectual u otra violación de derechos.

4. Limitaciones
En ningún caso StudioKó o sus proveedores serán responsables por daños (incluyendo, sin limitación, daños por pérdida de datos o ganancias, o debido a interrupción del negocio) que surjan del uso o la imposibilidad de usar los materiales en el sitio web de StudioKó.

5. Revisiones y Erratas
Los materiales que aparecen en el sitio web de StudioKó podrían incluir errores técnicos, tipográficos o fotográficos. StudioKó no garantiza que ninguno de los materiales en su sitio web sea preciso, completo o actual.`,
      },
    },
  }

  const t = content[language][type]

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{t.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4 text-sm text-muted-foreground whitespace-pre-line">
          {t.content}
        </div>
      </DialogContent>
    </Dialog>
  )
} 