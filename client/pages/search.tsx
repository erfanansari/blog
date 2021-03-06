import Layout from '$components/Layout'
import Search from '$components/Search'
import type { GetServerSideProps, NextPage } from 'next'
import qs from 'qs'

const Home: NextPage = ({ blogs }: any) => {
    return (
        <Layout title={'Search | Hashnode'}>
            <Search blogs={blogs} />
        </Layout>
    )
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({
    query: { term },
}) => {
    const query = qs.stringify({
        _where: {
            _or: [
                { title_contains: term },
                { description_contains: term },
                { 'author.name_contains': term },
            ],
        },
    })
    let blogs = []
    if (query) {
        const res = await fetch(
            `${process.env.API_URL || 'http://localhost:1337'}/blogs?${query}`,
        )
        blogs = await res.json()
    }
    return {
        props: { blogs },
    }
}
