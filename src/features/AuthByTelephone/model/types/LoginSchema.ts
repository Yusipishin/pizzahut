export interface LoginSchema {
    telephone: string;
    code: number;
    isLoading: boolean;
    error?: string;
}
