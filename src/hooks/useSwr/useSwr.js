"use client"
import useSWR from 'swr'

export const useSwr = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, isLoading, error } = useSWR('/api/movie', fetcher)
    return {
        data,
        isLoading,
        error
    }
}
