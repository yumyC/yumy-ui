// count animation
const $ = jQuery;

export const countAnimation = (object, from, to) => {
  let decimalpoint = 1;
  let x = String(to).split('.')[1];
  x = x ? x.length : 0;
  if (x > 0) {
    decimalpoint = 10 ** x;
  }
  $({ count: from }).animate(
    { count: to * decimalpoint },
    {
      duration: 2000,
      easing: 'linear',
      progress() {
        const c = Math.ceil(this.count);
        let text;
        if (x > 0) {
          const integer = String(c).slice(0, -x);
          const decimal = String(c).slice(-x);
          text = `${parseInt(integer, 10).toLocaleString()}.${decimal}`;
        } else {
          text = c.toLocaleString();
        }
        $(object).text(text);
      },
    },
  );
};
