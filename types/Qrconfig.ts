export type Qrformat = 'png' | 'gif' | 'jpeg' | 'svg' | 'jpg' | 'eps' ;
export interface Qrconfig {
    data: string; // conteúdo do QR code
    size: string; // tamanho do QR code
    color: string; // cor do QR code
    bgcolor: string; // cor de fundo do QR code
    format: Qrformat; // formato do QR code
};

export interface HistoryItem extends Qrconfig {
    id: string; // identificador único do item de histórico
    createdAt: Date; // data de criação do item de histórico
    url: string; // URL do QR code gerado
}