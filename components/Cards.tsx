import { ChevronDown, Circle, Plus, Star } from "lucide-react"

import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Separator } from "./ui/separator"

export function Cards() {

    const bootcamps = [
        {title: 'React', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam maiores quae nihil harum, blanditiis, cupiditate ipsa, inventore neque libero iusto veritatis fugit explicabo doloribus veniam vitae fugiat repudiandae non'},
        {title: 'Java', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam maiores quae nihil harum, blanditiis, cupiditate ipsa, inventore neque libero iusto veritatis fugit explicabo doloribus veniam vitae fugiat repudiandae non'},
        {title: 'Android', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia magnam maiores quae nihil harum, blanditiis, cupiditate ipsa, inventore neque libero iusto veritatis fugit explicabo doloribus veniam vitae fugiat repudiandae non'},
    ]
  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle className="text-2xl">Fundamentos de Programación</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio assumenda debitis quisquam aperiam at eveniet, ea quia veniam dolor consectetur veritatis suscipit ratione quasi sint, dolorum ex voluptatibus odio soluta!
      </CardContent>
    </Card>
  )
}