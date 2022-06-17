import { Figure, FigureNames } from "./Figure";
import { Cell } from "../Cell";
import { Colors } from "../Colors";
//@ts-ignore
import blackLogo from "../../assets/black-queen.png";
//@ts-ignore
import whiteLogo from "../../assets/white-queen.png";

export class Queen extends Figure {
  constructor (color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.QUEEN;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    return true;
  }
}
