"use server"

import { z } from "zod"

const ContactSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  interestArea: z.string().min(2),
  message: z.string().min(10).max(2000),
  preferredContact: z.string().optional(),
})

export async function submitContact(formData: FormData) {
  try {
    const data = ContactSchema.parse({
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      interestArea: formData.get("interestArea"),
      message: formData.get("message"),
      preferredContact: formData.get("preferredContact"),
    })
    console.log("Contact submission:", data)
    await new Promise((r) => setTimeout(r, 400))
    return { ok: true }
  } catch (err: any) {
    return { ok: false, error: err?.message ?? "Invalid input" }
  }
}
