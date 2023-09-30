/*describe('introduction(name)', function() {
    it('takes in an argument of a name and returns a phrase with that name using string interpolation', function() {
      expect(introduction("Aki")).toEqual("Hi, my name is Aki.");
      expect(introduction("Samip")).toEqual("Hi, my name is Samip."); */
      function introduction(name ) {
        return 'Hi, my name is '+ name +".";
      }

      introduction(Aki);
      introduction(Samip);

      /*describe('introductionWithLanguage(name, language)', function() {
        it('takes in two arguments, a name and a language, and returns a phrase using those arguments', function() {
          expect(introductionWithLanguage("Aki", "Ember.js")).toEqual("Hi, my name is Aki and I am learning to program in Ember.js.");
          expect(introductionWithLanguage("Samip", "React")).toEqual("Hi, my name is Samip and I am learning to program in React.");
        })
      })*/
      function introductionWithLanguage(name, language){
        return 'Hi, my name is '+ name  +" and I am learning to program in "+language +'.';
      }
      introductionWithLanguage(Aki,Ember.js)
      introductionWithLanguage(Samip, React)
      /*describe('introductionWithLanguageOptional(name, language)', function() {
        it('takes in two arguments, a name and a language, and language defaults to JavaScript', function() {
          expect(introductionWithLanguageOptional("Gracie")).toEqual("Hi, my name is Gracie and I am learning to program in JavaScript.");
        })
      })*/
      function introductionWithLanguageOptional(name, language ="JavaScript"){
        return 'Hi, my name is '+ name  +" and I am learning to program in "+language +'.';
      }
      introductionWithLanguageOptional(Gracie);