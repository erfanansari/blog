import Layout from '$components/Layout'
import { Flex, Heading, Text } from '@theme-ui/components'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function NotFoundPage() {
    const [count, setCount] = useState(3)
    const router = useRouter()
    useEffect(() => {
        if (count === 0) router.push('/')
        const timer = setInterval(() => {
            setCount(count - 1)
        }, 1000)
        return () => {
            clearTimeout(timer)
        }
    }, [count, router])
    return (
        <Layout>
            <Flex sx={{ alignItems: 'center', padding: 4, fontSize: '1.5rem', flexDirection: 'column' }}>
                <Heading>صفحه مورد نظر پیدا نشد 404</Heading>
                <Text>تا {count} ثانیه دیگر ریدایرکت میشوید</Text>
            </Flex>
        </Layout>
    )
}
