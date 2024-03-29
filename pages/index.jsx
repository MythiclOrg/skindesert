import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import DefaultLayout from '@/layouts/default';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={`${title()}`}>Make&nbsp;</h1>
          <h1 className={title({ color: 'pink' })}>beautiful&nbsp;</h1>
          <br />
          <h1 className={title()}>
            websites with the use of your design experience.
          </h1>
          <h4 className={subtitle({ class: 'mt-4' })}>
            Beautiful, fast and modern React UI library.
          </h4>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            href={siteConfig.links.docs}
            className={buttonStyles({
              color: 'primary',
              radius: 'full',
              variant: 'shadow',
            })}
          >
            Documentation
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideSymbol hideCopyButton variant="bordered">
            <span>
              Get started by editing{' '}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>

        <div className="dark:text-primary text-blue-500">
          blue if light and primary if dark
        </div>
      </section>
    </DefaultLayout>
  );
}
