const { createApp } = Vue;

createApp({
  data() {
    return {
      members: [],
      bills: [],

      showMemModal: false,
      showItemModal: false,
      //member Modal
      memName: '',
      //item Modal
      itemName: '',
      amount: '',
      itemWhoPay: '',
      itemList: true,
    };
  },
  methods: {
    //建立與刪除成員相關功能
    openAddMemModal() {
      this.showMemModal = true;
    },
    addMem() {
      let data = {
        name: this.memName,
        payment: 0,
        textColor: '',
        result: '',
      }
      this.members.push(data);
      this.memName = "";
      this.showMemModal = false;
      this.billSplit();
      this.resetReg();
    },
    clsMem() {
      this.showMemModal = false;
      this.showItemModal = false;
      this.resetReg();
    },
    //建立與刪除款項相關功能
    openAddItemModal() {
      this.showItemModal = true;
    },
    addItem() {
      let data = {
        itemName: this.itemName,
        amount: this.amount,
        whoPay: this.itemWhoPay.name,
      };
      this.bills.push(data);
      this.showItemModal = false;
      this.billSplit();
      this.resetReg();
    },
    delItem(index) {
      this.bills.splice(index, 1);
      this.billSplit();
    },
    //分帳計算
    billSplit() {
      this.resetSplit();
      let memNum = this.members.length;
      let avgPay = 0;
      for (bill of this.bills) {
        avgPay = bill.amount / memNum;
        for (mem of this.members) {
          if (mem.name == bill.whoPay) {
            mem.payment += Math.round(avgPay * (memNum - 1));
          } else {
            mem.payment -= Math.round(avgPay);
          }
        }
      }
      for (mem of this.members) {
        if (mem.payment > 0) {
          mem.textColor = '#BF616A';
          mem.result = "應收$" + mem.payment;
        } else if (mem.payment < 0) {
          mem.textColor = '#A3BE8C';
          mem.result = "應付$" + Math.abs(mem.payment);
        } else {
          mem.textColor = 'black';
          mem.result = "$" + mem.payment;
        }
      }
    },
    //每次分帳時，都要先上一動的結果清空
    resetSplit() {
      for (mem of this.members) {
        mem.payment = 0;
      }
    },
    //reset在前端暫存的參數
    resetReg() {
      this.memName = '';
      this.itemName = '';
      this.amount = '';
      this.itemWhoPay = '';
    },
    //結束分帳
    endSplit() {
      this.members = [];
      this.bills = [];
    },
    //UI
    toggle() {
      if (this.itemList) {
        this.itemList = false;
      } else {
        this.itemList = true;
      }
    }
  },
  watch: {
    members: {
      handler(value) {
        localStorage.setItem("split_members", JSON.stringify(this.members))
      },
      deep: true,
    },
    bills: {
      handler(value) {
        localStorage.setItem("split_bills", JSON.stringify(this.bills))
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.getItem("split_members")) {
      this.members = JSON.parse(localStorage.getItem("split_members"));
    }
    if (localStorage.getItem("split_bills")) {
      this.bills = JSON.parse(localStorage.getItem("split_bills"));
    }
  }
}).mount("#app");
