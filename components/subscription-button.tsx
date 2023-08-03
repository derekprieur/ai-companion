'use client'

import { useState } from "react"
import { Sparkles } from "lucide-react"
import axios from "axios"

import { Button } from "./ui/button"
import { useToast } from "./ui/use-toast"

type Props = {
    isPro: boolean
}

const SubscriptionButton = ({ isPro }: Props) => {
    const [loading, setLoading] = useState(false)
    const { toast } = useToast()

    const onClick = async () => {
        try {
            setLoading(true)
            const response = await axios.get('/api/stripe')

            window.location.href = response.data.url

        } catch (error) {
            toast({
                variant: 'destructive',
                description: 'Something went wrong.'
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <Button disabled={loading} onClick={onClick} size='sm' variant={isPro ? 'default' : 'premium'}>
            {isPro ? 'Manage Subscription' : 'Upgrade'}
            {!isPro && <Sparkles className="h-4 w-4 fill-white ml-2" />}
        </Button>
    )
}

export default SubscriptionButton