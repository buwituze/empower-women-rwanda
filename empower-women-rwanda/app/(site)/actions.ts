"use server"

import { z } from "zod"

const ApplySchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  district: z.string().min(2).max(120),
  interestArea: z.string().min(2).max(200),
  message: z.string().min(10).max(2000),
  context: z.string().optional(),
})

const PartnerSchema = z.object({
  orgName: z.string().min(2).max(200),
  contactName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  partnershipType: z.string().min(2),
  message: z.string().min(10).max(2000),
})

const VolunteerSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  volunteerArea: z.string().min(2),
  message: z.string().min(10).max(2000),
})

const ContactSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  interestArea: z.string().min(2),
  message: z.string().min(10).max(2000),
  preferredContact: z.string().optional(),
})

export async function applyAction(formData: FormData) {
  try {
    const data = ApplySchema.parse({
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      district: formData.get("district"),
      interestArea: formData.get("interestArea"),
      message: formData.get("message"),
      context: formData.get("context") || "Application",
    })
    console.log("Application submission:", data)
    await new Promise((r) => setTimeout(r, 500))
    return { ok: true }
  } catch (err: any) {
    return { ok: false, error: err?.message ?? "Invalid input" }
  }
}

export async function submitPartner(formData: FormData) {
  try {
    const data = PartnerSchema.parse({
      orgName: formData.get("orgName"),
      contactName: formData.get("contactName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      partnershipType: formData.get("partnershipType"),
      message: formData.get("message"),
    })
    console.log("Partner submission:", data)
    await new Promise((r) => setTimeout(r, 500))
    return { ok: true }
  } catch (err: any) {
    return { ok: false, error: err?.message ?? "Invalid input" }
  }
}

export async function submitVolunteer(formData: FormData) {
  try {
    const data = VolunteerSchema.parse({
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      volunteerArea: formData.get("volunteerArea"),
      message: formData.get("message"),
    })
    console.log("Volunteer submission:", data)
    await new Promise((r) => setTimeout(r, 500))
    return { ok: true }
  } catch (err: any) {
    return { ok: false, error: err?.message ?? "Invalid input" }
  }
}

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
