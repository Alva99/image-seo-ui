"use client"

export default function SkeletonResult() {

  return (

    <div className="bg-white p-6 rounded-xl shadow animate-pulse">

      <div className="h-6 bg-gray-200 rounded w-40 mb-6"/>

      <div className="space-y-4">

        <div className="h-10 bg-gray-200 rounded"/>
        <div className="h-20 bg-gray-200 rounded"/>
        <div className="h-10 bg-gray-200 rounded"/>

      </div>

      <div className="mt-6 space-y-2">

        <div className="h-4 bg-gray-200 rounded w-40"/>
        <div className="h-4 bg-gray-200 rounded w-32"/>
        <div className="h-4 bg-gray-200 rounded w-24"/>

      </div>

    </div>

  )
}