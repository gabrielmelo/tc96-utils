import { selects } from './select'

const lists = selects('li') as NodeListOf<Element>

lists.forEach(item => item.append('teste'))

console.log(lists)
