import { GetServerSideProps } from 'next';

interface HomeProps {
  count: number;
}

export default function Home({ count }: HomeProps) {
  return (
    <>
      <h1>Hello World</h1>
      <p>{count}</p>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count');
  const data = await response.json();

  console.log(data);

  return {
    props: {
      count: data.count
    }
  };
};
