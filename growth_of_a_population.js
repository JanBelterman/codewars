function nbYear(p0, percent, aug, p, years = 0) {
    if (p0 >= p) return years;
    return nbYear((p0 * (1 + (percent / 100))) + aug, percent, aug, p, years + 1)
}
