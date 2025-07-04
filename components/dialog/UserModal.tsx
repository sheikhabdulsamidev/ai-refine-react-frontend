import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface UserModalProps {
  showCreateUserDialog: boolean;
  setShowCreateUserDialog: (show: boolean) => void;
  newUser: any;
  setNewUser: (user: any) => void;
  handleCreateUser: () => void;
}

const UserModal = (props: UserModalProps) => {
  const { showCreateUserDialog, setShowCreateUserDialog, newUser, setNewUser, handleCreateUser } =
    props;
  return (
    <Dialog open={showCreateUserDialog} onOpenChange={setShowCreateUserDialog}>
      <DialogTrigger asChild>
        <Button className="bg-[#c1ff00] hover:bg-[#b2ee00] text-black font-semibold">
          Create User
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#1a1e37] border-[#282f52] text-white">
        <DialogHeader>
          <DialogTitle>Create New User</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="bg-[#131729] border-[#282f52] text-white"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="bg-[#131729] border-[#282f52] text-white"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <Select
              value={newUser.role}
              onValueChange={(value) => setNewUser({ ...newUser, role: value })}
            >
              <SelectTrigger className="bg-[#131729] border-[#282f52] text-white">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1e37] border-[#282f52] text-white">
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status">Status</Label>
            <Select
              value={newUser.status}
              onValueChange={(value) => setNewUser({ ...newUser, status: value })}
            >
              <SelectTrigger className="bg-[#131729] border-[#282f52] text-white">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="bg-[#1a1e37] border-[#282f52] text-white">
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => setShowCreateUserDialog(false)}
            className="border-[#282f52] text-white hover:bg-[#282f52]"
          >
            Cancel
          </Button>
          <Button
            onClick={handleCreateUser}
            className="bg-[#c1ff00] hover:bg-[#b2ee00] text-black font-semibold"
          >
            Create User
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;
