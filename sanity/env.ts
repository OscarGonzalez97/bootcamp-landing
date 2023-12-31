export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-30'

export const dataset = assertValue(
  process.env.SANITY_STUDIO_DATASET || "production",
  'Missing environment variable: SANITY_STUDIO_DATASET'
)

export const projectId = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID || "2ing4kvl",
  'Missing environment variable: SANITY_STUDIO_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
