export interface ApiRequest {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    url: string;
    params?: string;
    headers?: { [key: string]: string };
    body?: any;
}
