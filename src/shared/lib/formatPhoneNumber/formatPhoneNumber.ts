export function formatPhoneNumber(phoneNumber: string): number {
    return Number(phoneNumber.replace(/\D/g, ''));
}
