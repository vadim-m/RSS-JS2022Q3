import IconSVG from '../iconSVG/IconSVG';

class Winner {
  private id: number;

  private wins: number;

  private time: number;

  private color: string;

  private name: string;

  private icon: IconSVG;

  constructor(id: number, wins: number, time: number, color?: string, name?: string) {
    this.id = id;
    this.wins = wins;
    this.time = time;
    this.color = color ?? '#000';
    this.name = name ?? 'Car';
    this.icon = new IconSVG(this.color);
  }

  getElementTemplate() {
    const htmlTemplate = `
      <tr class="winners__table-row">
        <td>${this.id}</td>
        <td>${this.icon.getElementTemplate()}</td>
        <td>${this.name}</td>
        <td>${this.wins}</td>
        <td>${this.time}</td>
      </tr>
    `;

    return htmlTemplate;
  }

  render() {
    const htmlTemplate = this.getElementTemplate();

    return htmlTemplate;
  }
}

export default Winner;
