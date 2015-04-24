	function MyViewModel() {
		var self = this;
		self.password = ko.observable("");
		self.pwdConfirm = ko.observable("");
		self.pwdRule1 = ko.computed(function () {
			//至少一個英文字母
			return self.password().match(/[A-Za-z]/);
		});
		self.pwdRule2 = ko.computed(function () {
			//至少一個數字
			return self.password().match(/[0-9]/);
		});
		self.pwdRule3 = ko.computed(function () {
			//至少8個字元
			return self.password().length > 7;
		});
			//設定密碼
		self.allPass = ko.computed(function () {
			return self.pwdRule1() && self.pwdRule2() && self.pwdRule3();
		});
		
		/*
		self.numberOfClicks = ko.observable(0);
		
		self.cc = function() {
			count = self.numberOfClicks() + 1;
			self.numberOfClicks(count);
		};
		
		self.hasClickedTooManyTimes = ko.computed(function() {
			return self.numberOfClicks() >= 3;
		}, self);
		*/
		
		self.match = ko.computed(function () {
			if(self.pwdConfirm().length > 0 && self.password() == self.pwdConfirm()){
				return alert("登入成功");
				return true;
				
			}else{
				if(count === 5){
					this.password();
					console.log(count);
				}
			}
			//return self.pwdConfirm().length > 0 && self.password() == self.pwdConfirm();
		});	
	};
	
	var count = -1;
	var cc = function(){
		count += 1;
		MyViewModel();
		
	};
	
	ko.applyBindings(new cc());