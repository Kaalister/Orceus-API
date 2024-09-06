export declare class AppService {
    login(password: string): Promise<{
        password: string;
        connected: boolean;
        sessionType: string;
    }>;
}
