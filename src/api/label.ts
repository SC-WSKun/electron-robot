import api from '@/utils/api'


export const getLabelList = async () => {
    const res = await api.get('/label');
    return res
}

export const navigateToLabel = async (label_name: string) => {
    const res = await api.post('/action/navigation/label',{label_name});
    return res;
}