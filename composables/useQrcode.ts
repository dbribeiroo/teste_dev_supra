import type { Qrconfig, HistoryItem } from '~/types'

export const useQrcode = () => { 
    const config = useState<Qrconfig>('qrConfig', () => ({
        data: '',
        size: '300x300',
        color: '000000',
        bgcolor: 'ffffff',
        format: 'png',
    }));

    const currentQrUrl = useState<string | null>('currentQrUrl', () => null);
    const isLoading = useState<boolean>('isQrLoading', () => false);
    const error = useState<string | null>('qrError', () => null);
    const history = useState<HistoryItem[]>('qrHistory', () => []);


    // Inicializa o histórico do localStorage (apenas no lado do cliente)
    onMounted(() => {
        if (import.meta.client) {
            const saved = localStorage.getItem('qr-history');
            if (saved) {
                history.value = JSON.parse(saved);
            }   
        }
    });

    //Gera a URL da API do goQR.me
    const generateUrl = (cfg: Qrconfig): string => {
        const params = new URLSearchParams();
        params.append('data', cfg.data);
        params.append('size', cfg.size);
        params.append('color', cfg.color.replace('#', ''));
        params.append('bgcolor', cfg.bgcolor.replace('#', ''));
        params.append('format', cfg.format);

        return `https://api.qrserver.com/v1/create-qr-code/?${params.toString()}`;
    };


    //Gera o QR code
    const generate = async () => {
        if (!config.value.data) {
            error.value = 'Por favor, insira os dados para gerar o QR code.';
            return;
        }

        isLoading.value = true;
        error.value = null;

        try {
            const url = generateUrl(config.value);

            const res = await fetch(url);
            if (!res.ok) throw new Error('Erro ao comunicar com a API. Tente novamente.');

            currentQrUrl.value = url;
            addToHistory(url);

        } catch (e) {
            error.value = "Falha ao gerar o QR code. Tente novamente.";
        } finally {
            isLoading.value = false;
        }
    };

    // Adiciona a URL ao histórico
    const addToHistory = (payload: string) => {
        const item: HistoryItem = {
            ...config.value,
            id: Date.now().toString(),
            createdAt: new Date(),
            url: payload,
        };

        // Adiciona ao início e limita o histórico a 10 itens
        history.value = [item, ...history.value].slice(0, 10);

        if (import.meta.client) {
            localStorage.setItem('qr-history', JSON.stringify(history.value));
        }
    };

    // Carregar itens do histórico
    const loadFromHistory = (item: HistoryItem) => {
        config.value = {
            data: item.data,
            size: item.size,
            color: item.color,
            bgcolor: item.bgcolor,
            format: item.format,
        };
        currentQrUrl.value = item.url;
    };

    return {
        config,
        currentQrUrl,
        isLoading,
        error,
        history,
        generate,
        loadFromHistory,
    };
}