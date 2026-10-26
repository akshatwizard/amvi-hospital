import { contact_services } from "@/constants/contact_services";

export type ContactField = "name" | "phone" | "service" | "message";

export type ContactFormInput = {
  name: string;
  phone: string;
  service: string;
  message: string;
};

export type ContactData = ContactFormInput;

export type FieldErrors = Partial<Record<ContactField, string>>;

export type ValidationResult =
  | { success: true; data: ContactData }
  | { success: false; errors: FieldErrors };

export const contactFields: ContactField[] = [
  "name",
  "phone",
  "service",
  "message",
];

const NAME_REGEX = /^[\p{L}\s.'-]+$/u;
const PHONE_REGEX = /^(\+91|91|0)?[6-9]\d{9}$/;

const toStr = (v: unknown) => (typeof v === "string" ? v : "");

export function validateContact(input: unknown): ValidationResult {
  const raw = (input && typeof input === "object" ? input : {}) as Record<
    string,
    unknown
  >;

  const name = toStr(raw.name).trim();
  const phone = toStr(raw.phone).trim().replace(/[\s-]/g, "");
  const service = toStr(raw.service);
  const message = toStr(raw.message).trim();
  const errors: FieldErrors = {};
  if (!name) errors.name = "Please enter your full name";
  else if (name.length < 2) errors.name = "Name is too short";
  else if (name.length > 100) errors.name = "Name is too long";
  else if (!NAME_REGEX.test(name))
    errors.name = "Name can only contain letters, spaces, and . ' -";
  if (!phone) errors.phone = "Please enter your phone number";
  else if (!PHONE_REGEX.test(phone))
    errors.phone = "Enter a valid 10-digit mobile number";
  if (!service) errors.service = "Please select a service";
  else if (!(contact_services as readonly string[]).includes(service))
    errors.service = "Please select a valid service";
  if (message.length > 1000)
    errors.message = "Message must be under 1000 characters";
  if (Object.keys(errors).length > 0) return { success: false, errors };
  return { success: true, data: { name, phone, service, message } };
}
