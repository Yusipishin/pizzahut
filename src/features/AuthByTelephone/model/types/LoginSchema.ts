export interface LoginSchema {
    telephone: string;
    code: string[];
    isLoading: boolean;
    error?: string;
}
