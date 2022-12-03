export function dominoReaction(seq: string): string {
    function dominoReq(seq: string, i: number): string  {
        if (i >= seq.length) return seq
        if (['/', ' '].includes(seq[i])) return seq
        return dominoReq(seq.substring(0, i) + '/' + seq.substring(i + 1, seq.length), i + 1)
    }
    return dominoReq(seq, 0)
}
