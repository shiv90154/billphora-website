import { industries } from "@/lib/site";

export type DemoForm = { name: string; phone: string; business: string; type: string; city: string };
export type DemoErrors = Partial<Record<keyof DemoForm, string>>;

const CONTROL_CHARS = /[\u0000-\u001F\u007F<>]/g;

export function clean(value: string, max: number) {
  return value.replace(CONTROL_CHARS, "").replace(/\s+/g, " ").trim().slice(0, max);
}

export function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  return digits;
}

const PERSON = /^[\p{L}][\p{L} .'-]{1,59}$/u;
const PLACE = /^[\p{L}\p{N}][\p{L}\p{N} .,'&()/-]{1,79}$/u;

export function validateDemo(raw: DemoForm): { values: DemoForm; errors: DemoErrors } {
  const values: DemoForm = {
    name: clean(raw.name, 60),
    phone: normalizePhone(raw.phone),
    business: clean(raw.business, 80),
    type: clean(raw.type, 20),
    city: clean(raw.city, 60),
  };
  const errors: DemoErrors = {};
  if (!PERSON.test(values.name)) errors.name = "Enter your name using letters only (2 to 60 characters).";
  if (!/^[6-9]\d{9}$/.test(values.phone)) errors.phone = "Enter a valid 10-digit Indian mobile number.";
  if (!PLACE.test(values.business)) errors.business = "Enter your business name (2 to 80 characters).";
  if (!industries.some((i) => i.name === values.type)) errors.type = "Choose your business type.";
  if (!PERSON.test(values.city)) errors.city = "Enter a valid city name.";
  return { values, errors };
}
