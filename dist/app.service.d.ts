export declare class AppService {
    getHello(): string;
    login(password: string): Promise<{
        password: string;
        connected: boolean;
        sessionType: string;
    }>;
}
