'use client'

import { DrupalHomepage } from '@/lib/types'

interface StatsSectionProps {
  homepageContent: DrupalHomepage | null | undefined
}

export default function StatsSection({ homepageContent }: StatsSectionProps) {
  const features = homepageContent?.featuresItems || []
  if (!features || features.length === 0) return null

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: any, i: number) => (
            <div key={feature.id || i} className="text-center px-6 py-8 border border-slate-800 rounded-lg">
              {feature.icon && (
                <div className="text-3xl mb-4 text-accent-400">{feature.icon}</div>
              )}
              <div className="text-lg font-semibold text-white mb-2">{feature.title}</div>
              {feature.description?.processed && (
                <div className="text-sm text-slate-400" dangerouslySetInnerHTML={{ __html: feature.description.processed }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
