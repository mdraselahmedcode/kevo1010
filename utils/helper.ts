export const formatTime = (iso: string) =>
    new Date(iso).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });

export const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString();



// utils/helper.ts
export const formatDateTime = (iso: string) => {
    const date = new Date(iso);
    const dateStr = date.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });
    const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${dateStr} ${timeStr}`;
};
