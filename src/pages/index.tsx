import { GetServerSideProps } from 'next';

const Index = () => null;

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: 'docs/boxmodel',
    permanent: true,
  },
});

export default Index;
