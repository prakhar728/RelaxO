// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
import "@openzeppelin/contracts/access/Ownable.sol";

contract AddressManager is Ownable{

  mapping (address=>string) userAddress;

  function getAddress(address _currentUser) onlyOwner public view returns(string memory _ownerAddress)  {
      return userAddress[_currentUser];
  }

    function storeAddress(address _currentUser,string memory _userAddress) onlyOwner public  {
    userAddress[_currentUser]=_userAddress;
  }
}