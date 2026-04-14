// Wrapper for pdf-parse that works on Vercel serverless
// pdf-parse v1 has a known issue where it tries to load test PDFs on require()
// This wrapper imports only the core functionality

export async function parsePdf(buffer: Buffer): Promise<string> {
  const PDFJS = await import('pdfjs-dist/legacy/build/pdf.mjs');

  const doc = await PDFJS.getDocument({ data: new Uint8Array(buffer) }).promise;

  let fullText = '';
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const content = await page.getTextContent();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const text = content.items.map((item: any) => item.str || '').join(' ');
    fullText += text + '\n';
  }

  return fullText;
}
