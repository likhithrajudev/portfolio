// Turns "2026-11" into "Nov 2026"; a bare year like "2026" stays as it is
export function formatMonth(yearMonth: string) {
    const [year, month] = yearMonth.split("-");
    if (!month) return year;
    return new Date(Date.UTC(Number(year), Number(month) - 1, 1)).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
    });
}

// Turns "2026-11-10" into "November 10, 2026"
export function formatDate(isoDate: string) {
    return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
    });
}
