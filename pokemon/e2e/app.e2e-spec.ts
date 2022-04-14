import { BlankPage } from './app.po';

describe('Tour de Pokemon', () => {
  let page: BlankPage;

  beforeEach(() => {
    page = new BlankPage();
  });

  it('debería mostrar un mensaje diciendo que la aplicación funciona', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour de Pokemon');
  });
});
