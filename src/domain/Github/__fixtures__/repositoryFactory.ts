// factories/user.ts
import { Factory } from 'fishery'
import { Language } from '../Language'
import { Repository } from '../Repository'
// import postFactory from './post';

export const repositoryFactory = Factory.define<Repository>(({ sequence }) => ({
  id: `repo-${sequence}`,
  name: `Popular Repo-${sequence}`,
  full_name: `popular_guy-${sequence}`,
  private: false,
  owner: {
    login: `popular_guy-${sequence}`,
    id: `owner-${sequence}`,
    avatar_url: '',
  },
  description: `Some famouse repository description - ${sequence}`,
  stargazers_count: 10,
  watchers_count: 12,
  language: Language.Go,
  forks: 2,
  default_branch: 'main',
}))
