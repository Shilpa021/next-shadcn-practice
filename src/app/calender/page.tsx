"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { CalendarWithPresets } from "@/components/ui/calenderWithPresets"

export default function CalendarDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className="flex items-center justify-center flex-col space-y-14">
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border"
                captionLayout="dropdown"
            />

            <CalendarWithPresets
            />

        </div>
    )
}
