import { api } from '@api/instance.ts';

interface UploadResponse {
  filename: string;
  url: string;
}

export class FileService {
  static async upload(file: File | null): Promise<UploadResponse> {
    if (!file) throw new Error('Файл не выбран');

    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post('/uploadfile', formData);
    return response.data;
  }

  static async deleteFile(filename: string) {
    return api.delete(`/deletefile`, { data: { filename } });
  }
}
