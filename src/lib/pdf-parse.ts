// PDF text extraction using unpdf (serverless-compatible, no native deps)

export async function parsePdf(buffer: Buffer): Promise<string> {
  const { extractText } = await import('unpdf');
  const result = await extractText(new Uint8Array(buffer));
  // result.text is an array of strings, one per page
  return (result.text as string[]).join('\n');
}
