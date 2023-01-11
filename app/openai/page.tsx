import { ExternalLink } from '#/ui/ExternalLink';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getData() {
  const response = await openai.createImage({
    prompt: `Conference interpreters a getting beating.`,
    n: 1,
    size: '1024x1024',
  });

  const images = response.data.data;

  return images;
}

export default async function Page() {
  const images = await getData();

  return (
    <div className="space-y-4">
      <div className="text-xl font-medium text-gray-500">
        Open AI Playground
      </div>

      {images.map((image, i) => (
        <img key={`${image.url}_${i}`} src={`${image.url}`} />
      ))}

      <div>
        <ExternalLink href="https://beta.openai.com/">Docs</ExternalLink>
      </div>
    </div>
  );
}
