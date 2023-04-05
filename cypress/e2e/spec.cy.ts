describe('Добавить товар в корзину и оформить заказ', () => {

    it('Переход в каталог, использование фильтров, оформление заказа', () => {
        //переход в каталог
        cy.visit('/kosmetika-i-gigiena');
        //использовать фильтры

        //использование фильтра производителя
        cy.get('#Производитель')
            .find('input[type="checkbox"]')
            .then(($check) => {
                $check[0].click();
                const manufacturer = $check[0].id

                cy.get('*[class^="ButtonApplyFilter"]').click();

                cy.get('[data-test="manufacturer"]')
                    .each(($elem) => expect($elem.text()).to.include(manufacturer))
            });

        //использование фильтра бренда
        cy.get('#Бренд')
            .find('input[type="checkbox"]')
            .then(($check) => {
                $check[0].click();
                const brand = $check[0].id



                cy.get('*[class^="ButtonApplyFilter"]').click();

                cy.get('[data-test="brand"]')
                    .each(($elem) => expect($elem.text()).includes(brand))
            });


            //добавление в корзину
        cy.get('*[class^="ButtonInCart"]').click();




        //переход в корзину
        cy.visit('/cart');
        cy.get('article').should("have.length", "1")
        //изменить количество
        cy.get('*[class^="ButtonCounter"]').find('button').first().click();
        cy.get('*[class^="ButtonCounter"]').should('contain.text', '1');

        cy.get('*[class^="ButtonCounter"]').find('button').last().click();
        cy.get('*[class^="ButtonCounter"]').should('contain.text', '2');

        //оформить заказ
        cy.get('*[class^="CartList_total"]').find('a').click();
        cy.get('*[class^="OrderConfirmMessage"]').find('a').click();

        //переход обратно в каталог
        cy.location().should((loc) => {
            expect(loc.href).to.include('/kosmetika-i-gigiena')
        })
    })






})