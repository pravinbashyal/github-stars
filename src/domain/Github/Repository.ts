import { Language } from './Language'
import { License } from './License'
import { Owner } from './Owner'

export type Repository = {
  id: string
  name: string
  full_name: string
  private: boolean
  owner: Owner
  description: string
  html_url?: string
  homepage?: string
  size?: string
  stargazers_count: number
  watchers_count: number
  language: Language
  license?: License
  forks: number
  open_issues?: number
  watchers?: number
  default_branch: string
}
