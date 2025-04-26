import { api } from '@api/instance.ts';
import { AxiosResponse } from 'axios';

interface UploadResponse {
  filename: string;
  url: string;
}

export class FileService {
  static async upload(
    file: File | null,
  ): Promise<AxiosResponse<{ data: UploadResponse } & { message: string }>> {
    if (!file) throw new Error('Файл не выбран');

    const formData = new FormData();
    formData.append('file', file);

    const response = await api.post('/uploadFile', formData);
    return response.data;
  }

  static async deleteFile(filename: string) {
    return api.delete(`/deleteFile`, { data: { filename } });
  }
}
