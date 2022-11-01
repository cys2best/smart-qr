<script lang="ts">
import { defineComponent } from "vue";
import QrcodeVue from "qrcode.vue";
import { padLeadingZeros } from "../utils/number";
import { crc16 } from "../utils/crc";
import {timestamp, signature} from '../utils/crypto';
interface Transfer {
  bank: string;
  bankNumber: string;
  amount: number;
  content: string;
}
export default defineComponent({
  data() {
    return {
      options: {
        background: "#FFFFFF",
        foreground: "#000000",
      },
      form: {
        bank: "970436",
        bankNumber: '0451000329074',
        amount: 50000,
        content: "Buy Me a Coffee"
      },
    };
  },
  components: {
    QrcodeVue
  },  
  methods:{
    async onPasteAmount(event: any){
      // 35,8259
      // event.preventDefault();
      // await new Promise(r => setTimeout(r, 100));

      // console.log(event.target.value.replaceAll(".",""));
      // console.log(parseFloat(event.target.value.replaceAll(",","")))
      // const value = event.target.value.replace(/\,/g,'').replace(/\./g,'')

      // const value = Math.floor(parseFloat(event.target.value.replaceAll(",", "")))
      // console.log(value)
      // this.form.amount = value
    }
  },
  computed: {
    banks() {
      return [
        {
          text: "ABB - Ngân hàng TMCP An Bình",
          value: "970425",
          image: "/images/ABB.png",
        },
        {
          text: "(ACB) - Ngân hàng TMCP Á Châu",
          value: "970416",
          image: "/images/ACB.png",
        },
        {
          text: "BAB - Ngân hàng TMCP Bắc Á",
          value: "970409",
          image: "/images/BAB.png",
        },
        {
          text: "(BIDV) - Ngân hàng TMCP Đầu tư và Phát triển Việt Nam",
          value: "970418",
          image: "/images/BIDV.png",
        },
        {
          text: "(BVB) - Ngân hàng TMCP Bảo Việt",
          value: "970438",
          image: "/images/BVB.png",
        },
        {
          text: "(CAKE) - TMCP Việt Nam Thịnh Vượng - Ngân hàng số CAKE by VPBank",
          value: "546034",
          image: "/images/CAKE.png",
        },
        {
          text: "(CBBBANK) - Ngân hàng Thương mại TNHH MTV Xây dựng Việt Nam",
          value: "970444",
          image: "/images/CBB.png",
        },
        {
          text: "(CIMB) - Ngân hàng TNHH MTV CIMB Việt Nam",
          value: "422589",
          image: "/images/CIMB.png",
        },
        {
          text: "(CO-opBank) - Ngân hàng Hợp tác xã Việt Nam",
          value: "970446",
          image: "/images/COOPBANK.png",
        },
        {
          text: "(DBS) - DBS Bank Ltd - Chi nhánh Thành phố Hồ Chí Minh",
          value: "796500",
          image: "/images/DBS.png",
        },
        {
          text: "EIB - Ngân hàng TMCP Xuất Nhập khẩu Việt Nam",
          value: "970431",
          image: "/images/EIB.png",
        },
        {
          text: "GPB - Ngân hàng Thương mại TNHH MTV Dầu Khí Toàn Cầu",
          value: "970408",
          image: "/images/GPB.png",
        },
        {
          text: "HDB - Ngân hàng TMCP Phát triển Thành phố Hồ Chí Minh",
          value: "970437",
          image: "/images/HDB.png",
        },
        {
          text: "HLBVN - Ngân hàng TNHH MTV Hong Leong Việt Nam",
          value: "970442",
          image: "/images/HLBVN.png",
        },
        {
          text: "(HSBC) - Ngân hàng TNHH MTV HSBC (Việt Nam)",
          value: "458761",
          image: "/images/HSBC.png",
        },
        {
          text: "IBK - HCM - Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh TP. Hồ Chí Minh",
          value: "970456",
          image: "/images/IBK.png",
        },
        {
          text: "IBK - HN - Ngân hàng Công nghiệp Hàn Quốc - Chi nhánh Hà Nội",
          value: "970455",
          image: "/images/IBK.png",
        },
        {
          text: "(VIETINBANK) - Ngân hàng TMCP Công thương Việt Nam",
          value: "970415",
          image: "/images/ICB.png",
        },
        {
          text: "(IVB) - Ngân hàng TNHH Indovina",
          value: "970434",
          image: "/images/IVB.png",
        },
        {
          text: "(MB) - Ngân hàng TMCP Quân đội",
          value: "970422",
          image: "/images/MB.png",
        },
        {
          text: "(MSB) - Ngân hàng TMCP Hàng Hải",
          value: "970426",
          image: "/images/MSB.png",
        },
        {
          text: "(NAB) - Ngân hàng TMCP Nam Á",
          value: "970428",
          image: "/images/NAB.png",
        },
        {
          text: "STB - Ngân hàng TMCP Sài Gòn Thương Tín",
          value: "970403",
          image: "/images/STB.png",
        },
        {
          text: "TCB - Ngân hàng TMCP Kỹ thương Việt Nam",
          value: "970407",
          image: "/images/TCB.png",
        },
        {
          text: "TPB - Ngân hàng TMCP Tiên Phong",
          value: "970423",
          image: "/images/TPB.png",
        },
        {
          text: "VBA - Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam",
          value: "970405",
          image: "/images/VBA.png",
        },
        {
          text: "VCB - Ngân hàng TMCP Ngoại Thương Việt Nam",
          value: "970436",
          image: "/images/VCB.png",
        },
        {
          text: "(VIB) - Ngân hàng TMCP Quốc tế Việt Nam",
          value: "970441",
          image: "/images/VIB.png",
        },
        {
          text: "VIETBANK - Ngân hàng TMCP Việt Nam Thương Tín",
          value: "970433",
          image: "/images/VIETBANK.png",
        },
        {
          text: "(VPBANK) - Ngân hàng TMCP Việt Nam Thịnh Vượng",
          value: "970432",
          image: "/images/VPB.png",
        },
      ];
    },
    value() {
      if (!this.isValidQr) return "https://accounts.binance.com/vi/register?ref=92289054";

      const form: Transfer = this.form;

      const version = "000201";
      const method = "010212";
      const GUID = "0010A000000727";
      const bankId = `00${padLeadingZeros(form.bank.length)}${form.bank}`;
      const bankNumber = `01${padLeadingZeros(
        form.bankNumber.length
      )}${form.bankNumber}`;

      const bankCombined = `${bankId}${bankNumber}`;
      const bankInfo = `01${bankCombined.length}${bankCombined}`;

      const serviceCode = "0208QRIBFTTA";
      const identity = `${GUID}${bankInfo}${serviceCode}`;

      const consumerIdentity = `38${padLeadingZeros(
        identity.length
      )}${identity}`;

      const moneyCode = "5303704";

      const amount = `54${padLeadingZeros(form.amount.toString().length)}${
        form.amount
      }`;

      const country = "5802VN";

      const transferContent = !!form.content ? `08${padLeadingZeros(form.content.length)}${form.content}` : ''

      const content = !!transferContent ? `62${padLeadingZeros(transferContent.length)}${transferContent}` : '';

      const entry = `${version}${method}${consumerIdentity}${moneyCode}${amount}${country}${content}6304`;
      const crc = `${crc16(entry).toString(16).toUpperCase()}`;
      console.log(`${entry}${crc}`)
      return `${entry}${crc}`;
    },
    isValidQr() {
      const form: Transfer = this.form;
      return (
        !!form.bank &&
        !!form.bankNumber &&
        !!form.amount
      );
    },
  },
  mounted(){
    
    // console.log(exchange);
    // const params = {
    //   tradeType; 'BUY',
    //   timestamp:
    // }

  }
});
</script>

<template>
  <div class="grid gird-cols-1 align-center my-6">
    <h1 class="text-4xl font-bold text-center">QR Generator</h1>
  </div>
  <div class="grid grid-cols-2 gap-2 justify-items-center items-center">
    <div class="form">
      <form class="w-full">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Bank name(*)</span>
            <!-- <v-select class="mt-1 block w-full" :options="banks" label="text" v-model="form.bank">
              <template slot="bank" slot-scope="bank">
                  <img :src="bank.image" alt="">
                  {{ option.text }}
              </template>
            </v-select> -->

            <select class="mt-1 block w-full" v-model="form.bank">
              <option
                v-for="bank in banks"
                :value="bank.value"
                :key="bank.value"
              >
                {{ bank.text }}
              </option>
            </select>
          </label>

          <label class="block">
            <span class="text-gray-700">Bank number(*)</span>
            <input
              type="text"
              class="mt-1 block w-full"
              v-model="form.bankNumber"
            />
          </label>

          <label class="block">
            <span class="text-gray-700">Amount(*)</span>
            <input
              type="number"
              class="mt-1 block w-full"
              @paste="onPasteAmount"
              v-model.number="form.amount"
            />
          </label>

          <label class="block">
            <span class="text-gray-700">Content(*)</span>
            <textarea
              rows="4"
              class="mt-1 block w-full"
              v-model.lazy="form.content"
            ></textarea>
          </label>
        </div>
      </form>
    </div>
    <div class="qr" :class="{ 'opacity-70': !isValidQr }">
      <qrcode-vue
        id="qr-code-image"
        :value="value"
        :size="350"
        :foreground="options.foreground"
        :background="options.background"
      />
    </div>
  </div>
</template>

<style scoped>
</style>
