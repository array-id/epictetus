import Link from 'next/link';
import InfoPost from '@components/InfoPost';

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article>
      <Link href="/detail">
        <a>
          <img src={thumbnail} className="w-full rounded mb-4" />
        </a>
      </Link>
      <InfoPost
        {...infoPost}
      />
    </article>
  );
}
