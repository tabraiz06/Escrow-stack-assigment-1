import React, { useState } from "react";
import cashImg from "../assets/cashImg.png";
import cashstack from "../assets/cash-stack.png";
import ArrowDropDown from "../assets/ArrowDropDown.png";
const Main = () => {
  const [companyName, setCompanyName] = useState("");
  const [accountName, setAccountName] = useState("");

  const data = [
    {
      companyName: "TCS",
      accountName: "Tabraiz",
      date: "07/05/2024 01:04 PM",
      credit: "₹ 21,337",
      acBalance: "₹ 21,337",
      utrNo: "1000000",
      acNo: "AC0CF7RRUY407QHU",
    },
    {
      companyName: "TCS",
      accountName: "Tabraiz",
      date: "04/05/2024 12:38 PM",
      credit: "₹ 21,337",
      acBalance: "₹ 21,337",
      utrNo: "CMS4136431811",
      acNo: "0104SLNEFTPL",
    },
    {
      companyName: "TCS",
      accountName: "Tabraiz",
      date: "28/03/2024 05:09 PM",
      credit: "₹ 21,337",
      acBalance: "₹ 21,337",
      utrNo: "CMS4019645011",
      acNo: "ACT861VM9RR67Z5C",
    },
    {
      companyName: "IBM",
      accountName: "Mirza",
      date: "28/03/2024 05:09 PM",
      credit: "₹ 5,015.69",
      acBalance: "₹ 5,015.69",
      utrNo: "CMS3956666735",
      acNo: "AC0CF7RRUY407QHU",
    },
    {
      companyName: "IBM",
      accountName: "Mirza",
      date: "19/03/2024 11:33 PM",
      credit: "₹ 5,015.69",
      acBalance: "₹ 5,015.69",
      utrNo: "CMS3948064984",
      acNo: "ACT861VM9RR67Z5C",
    },
    {
      companyName: "IBM",
      accountName: "Mirza",
      date: "19/03/2024 11:33 PM",
      credit: "₹ 16,000",
      acBalance: "₹ 16,000",
      utrNo: "CMS3938564916",
      acNo: "AC0CF7RRUY407QHU",
    },
  ];

  return (
    <div className="main">
      <div className="frame9">
        <div className="selects">
          <div>
            <select
              name="companyName"
              id="companyName"
              onChange={(e) => setCompanyName(e.target.value)}
            >
              <option value="">Company Name</option>
              <option value="TCS">TCS</option>
              <option value="IBM">IBM</option>
            </select>
            <select
              name="accountName"
              id="accountName"
              onChange={(e) => setAccountName(e.target.value)}
            >
              <option value="">Account Name</option>
              <option value="Tabraiz">Tabraiz</option>
              <option value="Mirza">Mirza</option>
            </select>
          </div>
        </div>
        <div className="availBal">
          <div className="containts">
            <div className="imgcash">
              <img src={cashImg} alt="" />
            </div>
            <div className="txtHolder">
              <span id="ab1">Avaliable Balance</span>
              <span id="ab2">₹ 8888,88,88,888</span>
            </div>
          </div>
          <img src={cashstack} alt="" />
        </div>
      </div>
      <div className="textHolder">
        <span>Latest Loads are displyed here</span>
      </div>
      <div className="group2325">
        <table>
          <thead>
            <tr>
              <th className="date">Date</th>
              <th className="credit">Credit</th>
              <th className="acBal">A/c Balance</th>
              <td className="utr">UTR/RRN</td>
              <th className="upi">A/C No/UPI</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((ele) => {
                if (companyName !== "") {
                  return ele.companyName.includes(companyName);
                } else {
                  return ele;
                }
              })
              .filter((ele) => {
                if (accountName !== "") {
                  if (ele.accountName === accountName) {
                    return ele;
                  }
                } else {
                  return ele;
                }
              })

              .map((ele, index) => {
                return (
                  <tr key={index}>
                    <td className="date">{ele.date}</td>
                    <td className="credit">{ele.credit}</td>
                    <td className="acBal">{ele.acBalance}</td>
                    <td className="utr">{ele.utrNo}</td>
                    <td className="upi">{ele.acNo}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;