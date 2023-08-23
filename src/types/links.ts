export interface NocoDBRedirectRecord {
  list: {
    Id: number
    slug: string
    CreatedAt: string
    UpdatedAt: string
    url: string
  }[]
  PageInfo: {
    pageSize: number
    totalRows: number
    isFirstPage: boolean
    isLastPage: boolean
    page: number
  }
}

export interface NocoDBLinkRecord {
  list: {
    title: string
    href: string
    order: string
    icon: string
    ncRecordId: string
    ncRecordHash: string
  }[]
  PageInfo: {
    pageSize: number
    totalRows: number
    isFirstPage: boolean
    isLastPage: boolean
    page: number
  }
}

export interface ILinkRecord {
  href: string
  title: string
  order: string
  icon?: string
}
